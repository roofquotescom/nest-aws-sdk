import { Inject } from '@nestjs/common';
import { getAwsServiceToken } from './tokens';
import { AwsService, AwsServiceType } from './types';

export const InjectAwsService: (
  serviceConstructor: AwsServiceType<AwsService>,
) => PropertyDecorator & ParameterDecorator = (
  serviceConstructor: AwsServiceType<AwsService>,
) => {
  return Inject(getAwsServiceToken(serviceConstructor));
};
