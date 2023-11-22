interface Contract {
  whatsappPhoneNumber: string;
}

const Environment: Contract = {
  whatsappPhoneNumber: process.env.NEXT_PUBLIC_WA_PHONE_NUMBER || "",
};

export default Environment;
