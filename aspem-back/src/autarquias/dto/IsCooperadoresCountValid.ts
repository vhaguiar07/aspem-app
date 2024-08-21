import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsCooperadoresCountValid(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsCooperadoresCountValid',
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
          return `O número de cooperadores deve ser igual ao valor de ${relatedPropertyName}.`;
        },
      },
    });
  };
}
