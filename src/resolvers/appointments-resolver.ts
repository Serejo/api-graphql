import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Costumer } from "../dtos/models/costumer-model";

@Resolver(() => Appointment)
export class AppointmentsResolvers {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      },
    ];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };
    return appointment;
  }

  @FieldResolver(() => Costumer)
  async costumer(@Root() appointment: Appointment) {
    console.log(appointment);
    return {
      name: "John Doe",
    };
  }
}
