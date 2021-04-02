import passportJWT from 'passport-jwt';
import { JWT_KEY } from '../../src/config/config';
import { UsersModel } from '../../src/models/users.model';

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_KEY,
};

module.exports = (passport: any) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await UsersModel.findById(payload.userID).select(
          'email id',
        );

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
      }
    }),
  );
};
