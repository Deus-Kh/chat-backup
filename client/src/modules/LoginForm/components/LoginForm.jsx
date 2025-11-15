import React from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Block } from '../../../components';
import {ValidateField} from '../../../utils/helpers'

function LoginForm(props) {
  const{
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
  }= props
    
    return (<>
    <Block>
        <div className="auth__top">
            <h2>Login</h2>
            <p>Please, login in your account</p>
        </div>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit} 
      >
        <Form.Item
        validateStatus={ValidateField('email',touched,errors)}
        hasFeedback
        help={!touched.email ? '': errors.email}
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            id='email'
           prefix={<UserOutlined className="site-form-item-icon" />} 
           placeholder="Email" 
           onChange={handleChange}
          onBlur={handleBlur}
          // defaultValue={values.username}
          />
        </Form.Item>
        <Form.Item
        validateStatus={ValidateField('password',touched,errors) }
        hasFeedback
        help={!touched.password &&values.password!=="" ? '': errors.password}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
          id='password'
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          onBlur={handleBlur}
          />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item> */}
  
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isSubmitting}  className="login-form-button">
            Log in
          </Button>
          
        </Form.Item>
        <Form.Item>
        Or <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form> 
      </Block>
      </>
      );
}

export default LoginForm;