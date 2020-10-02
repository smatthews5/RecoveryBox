const { getAllData, postUserInfo } = require('../controller');
const db = require('../models/index');

const newUser = {
  email: 'test2@test.com',
  username: 'test2',
  password: 'test2',
  firstName: 'test2',
  lastName: 'test2',
  registrationDate: Date.now(),
};

test('saves and returns user', async () => {
  const req = { body: newUser };
  const res = {
    status: jest.fn(),
    sendStatus: jest.fn(),
    send: jest.fn(),
  };
  await postUserInfo(req, res);
  expect(res.status).toHaveBeenCalledWith(201);
});

test('gets data for user', async () => {
  const req = { params: { id: 1 } };
  const res = {
    sendStatus: jest.fn(),
    status: jest.fn(),
    send: jest.fn(),
  };
  await getAllData(req, res);
  const posts = await db.Data.findAll({
    where: { UserId: 1 },
  });
  expect(res.sendStatus).toHaveBeenCalledTimes(0);
  expect(res.status).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledTimes(1);
  expect(res.send).toHaveBeenCalledWith(posts);
});
