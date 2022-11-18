import { Role } from '@/api/user/role.enum';
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
// import RequestWithUser from '../authentication/requestWithUser.interface';

const RoleGuard = (role: Role): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest<any>();
      const user = request.user;

      return user?.roles.includes(role);
    }
  }

  return mixin(RoleGuardMixin);
}

export default RoleGuard;
