export interface Patient {
    firstname: string;
    lastname: string;
    age: number;
    phone?: string;
    birthDate?: Date;
    address?: string;
    socialWelfare?: string;
    healthInsurance?: string;
    appointmentCount?: number;
    nextAppointment?: Date;
}
