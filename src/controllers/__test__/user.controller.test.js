import request from 'supertest';
import express from 'express';
import userController from '../user.controller.js';
//import userService from '../../services/user.service.js';
import { jest } from '@jest/globals';
import userService from '../../services/user.service.js';



userService.getUserById = jest.fn(() =>
    Promise.resolve({
        id: '1',
        username: 'testuser',
        email: 'testuser@example.com'
    })
);

userService.createUser = jest.fn(() =>
    Promise.resolve({
        id: '2',
        username: 'newuser',
        email: 'newuser@example.com'
    })
);

userService.updateEmailUserById = jest.fn(() =>
    Promise.resolve({
        id: '1',
        username: 'testuser',
        email: 'newemail@example.com'
    })
);

const app = express();
app.use(express.json());

app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);
app.put('/users/:id/email', userController.updateEmailUserById);
app.put('/users/:id/username', userController.updateUsernameById);
app.delete('/users/:id', userController.deleteUserById);

describe('User Controller', () => {
    describe('getUserById', () => {
        it('should return user data if user exists', async () => {
            userService.getUserById();

            const response = await request(app)
                .get('/users/1')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body).toEqual({
                user: {
                    id: '1',
                    username: 'testuser',
                    email: 'testuser@example.com'
                }
            });
        });

        it('should return 400 if user does not exist', async () => {
            userService.getUserById.mockRejectedValue(new Error('User not found'));

            const response = await request(app)
                .get('/users/999')
                .expect('Content-Type', /json/)
                .expect(400);

            expect(response.body).toEqual({
                message: 'Bad request'
            });
        });
    });


    describe('createUser', () => {
        it('should create a new user and return 201', async () => {


            userService.createUser();

            const newUser = {
                username: 'newuser',
                email: 'newuser@example.com'
            };
            const response = await request(app)
                .post('/users')
                .send(newUser)
                .expect('Content-Type', /json/)
                .expect(201);

            expect(response.body).toEqual({
                
                    id: '2',
                    username: 'newuser',
                    email: 'newuser@example.com'
                
            });
        });
    });

   
});