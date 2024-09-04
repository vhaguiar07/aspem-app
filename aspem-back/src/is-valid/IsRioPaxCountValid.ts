import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsRioPaxCountValid(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsRioPaxCountValid',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return Array.isArray(value) && value.length === relatedValue;
        },
        defaultMessage(args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          return `O número de beneficiários deve ser igual ao valor de ${relatedPropertyName}.`;
        },
      },
    });
  };
}
