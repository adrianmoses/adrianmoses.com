import router from 'next/dist/next-server/lib/router/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import userbase from 'userbase-js';
import { UserProps } from '../components/types';
import { pushRoute } from '../helpers';

const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`

const FormContainer = styled.div`
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 2px #c9c9c9;
  padding 20px 40px;
  margin-top: 40px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 250px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  height: 36px;
`

const Button = styled.button`
  border: 1px solid #333;
  border-radius: 5px;
  font-weight: 700;
  height: 36px;
  background: #fff;
  cursor: pointer;
`

const ErrorSpan = styled.span`
  font-weight: 700px
  font-size: 12px;
  color: red;
`

export default function Login({ user, setUser }: UserProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");

  if (user) {
    pushRoute('/');
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await userbase.signIn({
        username: email,
        password,
      })

      setLoading(false);
      setUser(user);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }
  return (
    <LoginMain>
      <FormContainer>
        <InputContainer>
          <label>Email</label>
          <Input 
            placeholder="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label>Password</label>
          <Input 
            type="password"
            placeholder="*******" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <SubmitContainer>
          <ErrorSpan>{error}</ErrorSpan>
          <Button onClick={handleSignUp}>
             { loading ? 'Logging In' : 'Log In ' }
          </Button>
        </SubmitContainer>
      </FormContainer>
    </LoginMain>
  )
}