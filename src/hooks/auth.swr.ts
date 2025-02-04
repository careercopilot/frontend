import authService from "@/services/auth.service";

export async function authenticationFetcher(
  url: string,
  {
    arg,
  }: {
    arg: {
      authType: string;
      data: any;
    };
  }
) {
  try {
    return await authService[arg.authType as keyof typeof authService](
      arg.data
    );
  } catch (err) {
    console.log("err", err);
    throw err;
  }
}
