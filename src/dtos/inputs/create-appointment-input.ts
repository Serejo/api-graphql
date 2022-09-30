import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
  @Field()
  costumerId: string;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
