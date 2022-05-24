const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(async () => 'success login');
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('danbi', 'dabn1234');
    expect(login.mock.calls.length).toBe(1);
  });

  it('should not call login() on UserClient when if already logged in', async () => {
    await userService.login('danbi', 'dabn1234'); // calls
    await userService.login('danbi', 'dabn1234'); // should not call

    expect(login.mock.calls.length).toBe(1);
  });
});
