// import * as chai from 'chai';
// import sinon from 'sinon';
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// dotenv.config();
// import {checkClassroomAvailability} from '../controllers/classController.js';

// describe('Class/Classroom booking logic', () => {

//     describe('Classroom availability check', () => {
        
//         it('should return false if classroom is unavailable', async () => {
//             const classroomId = '6601a50dc5be5e60e6ce9c86';
//             const startDate = new Date('2024-03-27T13:00:00');
        
//             const findOneStub = sinon.stub();
//             findOneStub.returns(Promise.resolve(null)); // Mocking no overlapping class found
//             // If you want to mock a case with overlapping class found, return a non-null value
        
//             const result = await checkClassroomAvailability(classroomId, startDate);
//             chai.expect(result).to.be.false;
//           });

//     //     it('should return false if classroom is not available', async () => {
//     //         const classroomId = '1234';
//     //         const startDate = '2022-01-01T10:00:00.000Z';
//     //         const findOneStub = sinon.stub();
//     //         findOneStub.returns({
//     //             classroom: classroomId,
//     //             startDate: startDate
//     //         });
//     //         const Class = {
//     //             findOne: findOneStub
//     //         };
//     //         const result = await checkClassroomAvailability(Class, classroomId, startDate);
//     //         chai.expect(result).to.be.false;
//     //     });

//      });

// });