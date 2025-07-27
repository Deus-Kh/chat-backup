import React ,{useState} from 'react';
import { LockOutlined, UserOutlined,MailOutlined ,InfoCircleTwoTone} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Block } from '../../../components';
import {ValidateField} from '../../../utils/helpers'

function RegisterForm(props) {
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
    
    const [success, setsuccess] = useState(false)
    return (<>
    <Block>
    {!success?  <>
        <div className="auth__top">
            <h2>Sign Up</h2>
            <p>To continue you need to register</p>
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
        validateStatus={ValidateField('username',touched,errors)}
        hasFeedback
        help={!touched.username ? '': errors.username}
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input id='username' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={handleChange}
          onBlur={handleBlur}/>
        </Form.Item>


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
          prefix={<MailOutlined className="site-form-item-icon" />} 
          placeholder="Email" type='email' EmaionChange={handleChange}
          onBlur={handleBlur}
          
          />
        </Form.Item>


        <Form.Item
          validateStatus={ValidateField('password',touched,errors)}
          hasFeedback
          help={!touched.password ? '': errors.password}
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


        <Form.Item
        validateStatus={ValidateField('repeatPassword',touched,errors)}
        hasFeedback
        help={!touched.repeatPassword ? '': errors.repeatPassword }
          name="repeatPassword"
          rules={[
            {
              required: true,
              message: 'Please repeat your Password!',
            },
          ]}
        >
          <Input
          id='repeatPassword'
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Repeat Password"
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          
        </Form.Item>
        <Form.Item>
        Or <Link to="/login">login</Link>
        </Form.Item>
      </Form> </>
      
      : 
      <div className="success-block">
        <div>
          <InfoCircleTwoTone style={{fontSize:'50px', textAlign:'center'}}/>
        </div>
        <h3>Confirm your account</h3>
        <p>We sended confirmation link on your email</p>
      </div>
      }</Block>
      </>
      );
}

export default RegisterForm;