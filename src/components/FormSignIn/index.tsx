import TextField from 'components/TextField';
import * as S from './styles';
import { Email, Lock } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import Link from 'next/link';
import { FormWrapper, FormLink } from 'components/Form';

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        icon={<Email />}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        icon={<Lock />}
      />
      <S.ForgotLink href="#">Forgot your password?</S.ForgotLink>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don’t have an account? <Link href={'/sign-up'}>Sign up</Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignIn;
