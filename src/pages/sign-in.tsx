import FormSignIn from 'components/FormSignIn';
import Auth from 'templates/Auth';

export default function SignIn() {
  return (
    <Auth ContentTitle="Sign in">
      <FormSignIn />
    </Auth>
  );
}
