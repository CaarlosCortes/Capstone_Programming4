import request from 'supertest';
import express from 'express';
import userMiddleware from '../../middlewares/validations/user.validation.js';

const app = express();
app.use(express.json());

app.post('/test/create-user', userMiddleware.validateCreateUser, (req, res) => {
  res.status(200).send('User created');
});

app.put('/test/update-email/:id', userMiddleware.validateUpdateEmailUser, (req, res) => {
  res.status(200).send('Email updated');
});

app.put('/test/update-username/:id', userMiddleware.validateUpdateUsername, (req, res) => {
  res.status(200).send('Username updated');
});

describe('User Validation Middleware', () => {
  describe('validateCreateUser', () => {
    it('should pass validation with valid input', async () => {
      const response = await request(app)
        .post('/test/create-user')
        .send({
          username: 'testuser',
          password: 'password123',
          email: 'testuser@example.com'
        });

      expect(response.status).toBe(200);
      expect(response.text).toBe('User created');
    });

    it('should fail validation with missing username', async () => {
      const response = await request(app)
        .post('/test/create-user')
        .send({
          password: 'password123',
          email: 'testuser@example.com'
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Bad requqets');
    });

    it('should fail validation with invalid email', async () => {
      const response = await request(app)
        .post('/test/create-user')
        .send({
          username: 'testuser',
          password: 'password123',
          email: 'invalid-email'
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Bad requqets');
    });
  });

  describe('validateUpdateEmailUser', () => {
    it('should pass validation with valid email', async () => {
      const response = await request(app)
        .put('/test/update-email/1')
        .send({
          email: 'newemail@example.com'
        });

      expect(response.status).toBe(200);
      expect(response.text).toBe('Email updated');
    });

    it('should fail validation with invalid email', async () => {
      const response = await request(app)
        .put('/test/update-email/1')
        .send({
          email: 'invalid-email'
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Bad requqets');
    });
  });

  describe('validateUpdateUsername', () => {
    it('should pass validation with valid username', async () => {
      const response = await request(app)
        .put('/test/update-username/1')
        .send({
          username: 'newusername'
        });

      expect(response.status).toBe(200);
      expect(response.text).toBe('Username updated');
    });

    it('should fail validation with missing username', async () => {
      const response = await request(app)
        .put('/test/update-username/1')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Bad requqets');
    });
  });
});
