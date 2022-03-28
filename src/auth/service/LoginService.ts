
import { validatePassword } from '../utils/PasswordManager';

import { createAuthToken, createRefreshToken } from '../utils/tokenManager';

import { getOneUserByEmail } from '../../users/services/getOneUserByEmail';
import { authCreateRefreshToken } from './authCreateRefreshToken';


import { LoginUser, TokenResponse } from 'auth/types';
import logger from 'shared/logger/appLogger';

export const authLoginService = async (
  userRequest: LoginUser
): Promise<TokenResponse> => {
  try {
    const user = await getOneUserByEmail(userRequest.email);

    if (!user) throw new Error('user email or password is incorrect');

    const auth = await validatePassword(userRequest.password, user.password);

    if (!auth) throw new Error('user email or password is incorrect');
    const authToken = createAuthToken({ id: user.id });
    const refreshToken = await authCreateRefreshToken(user.id);

    return {
      authToken,
      refreshToken,
    };
  } catch (error: any) {
    logger.error('Error login user', {
      instance: 'services',
      fn: 'authLoginService',
      trace: error.message,
    });
    throw new Error(error);
  }
};