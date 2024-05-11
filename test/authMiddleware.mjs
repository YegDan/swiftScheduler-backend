
import * as chai from 'chai';
import sinon from 'sinon';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import { authenticate, isTeacher, isStudent } from '../middleware/authMiddleware.js';

describe('Auth Middleware', () => {
    //no toke provided
    describe('authenticate', () => {
        it('should return 401 if no token provided', () => {
            const req = {
                headers: {}
            };
            const res = {
                status: function (status) {
                    return this;
                },
                send: function (message) {
                    return message;
                }
            };
            const result = authenticate(req, res);
            chai.expect(result).to.be.eql({message: 'Access denied. No token provided.'});
        });

        it('should call next() if token is valid', () => {

          

            const user ={_id: '1234',
             role: 'teacher',
             email: 'chris@gmail.com',
             isAdmin: false};


            const token = jwt.sign(user, process.env.JWT_SECRET);
            const req = {
                headers: {
                    authorization: `Bearer ${token}`
                
                }
            };
           
            const res = {
                status: function (status) {
                    return this;
                },
                send: function (message) {
                    return message;
                }
            };
            
            const next = sinon.spy();
            
            authenticate(req, res, next);
            chai.expect(next.called).to.be.true;
            //teacher._id, role: 'teacher', email: teacher.email, isAdmin: teacher.isAdmin}, process.env.JWT_SECRET
        });

        it('should return 400 if token is invalid', () => {

            

            const user ={_id: '1234',
             role: 'teacher',
             email: 'chris@gmail.com',
             isAdmin: false};


            const token = jwt.sign(user, 'wrong secret');
            const req = {
                headers: {
                    authorization: `Bearer ${token}`
                
                }
            };
           
            const res = {
                status: function (status) {
                    return this;
                },
                send: function (message) {
                    chai.expect(message.message).to.equal( 'Invalid token.');
                    return message;
                }
            };
            
          
            
            authenticate(req, res);


        });
    });

    describe('isTeacher', () => {
        it('should call next() if user is a teacher', () => {
            const req = {
                user: {
                    _id: '1234',
                    role: 'teacher'
                }
            };
            const next = sinon.spy();
            isTeacher(req, {}, next);
            chai.expect(next.called).to.be.true;
        });

        it('should return 403 if user is not a teacher', () => {
            const req = {
                user: {
                    _id: '1234',
                    role: 'student'
                }
            };
            const res = {
                status: function (status) {
                    return this;
                },
                json: function (message) {
                    return message;
                }
            };
            const result = isTeacher(req, res);
            chai.expect(result).to.be.eql({message: 'Unauthorized access. User is not a teacher.'});
        });
    });

    describe('isStudent', () => {
        it('should call next() if user is a student', () => {
            const req = {
                user: {
                    _id: '1234',
                    role: 'student'
                }
            };
            const next = sinon.spy();
            isStudent(req, {}, next);
            chai.expect(next.called).to.be.true;
        });

        it('should return 403 if user is not a student', () => {
            const req = {
                user: {
                    _id: '1234',
                    role: 'teacher'
                }
            };
            const res = {
                status: function (status) {
                    return this;
                },
                json: function (message) {
                    return message;
                }
            };
            const result = isStudent(req, res);
            chai.expect(result).to.be.eql({message: 'Unauthorized access. User is not a student.'});
        });
    });
    

});