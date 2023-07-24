import React, { useState } from 'react'
import styles from './Login.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export const LoginPage = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(true)

    const handleSubmit = () => {

        console.log('submit')
        console.log("userName : " + userName)
        console.log("email : " + email)
        console.log("password : " + password)
        if (password.length < 5) {
            alert('Please enter at least 5 characters password');
        } else {
            var d_count = 0;
            var sl_count = 0;
            var Cl_count = 0;
            var s_ctn = 0;
            for (const chr of password) {
                (chr.charCodeAt() >= 36 && chr.charCodeAt() <= 48 || chr.charCodeAt() >= 58 && chr.charCodeAt() <= 64 || chr.charCodeAt() >= 91 && chr.charCodeAt() <= 96) ? s_ctn += 1 : (chr.charCodeAt() >= 65 && chr.charCodeAt() <= 90) ? Cl_count += 1 : (chr.charCodeAt() >= 97 && chr.charCodeAt() <= 122) ? sl_count += 1 : (chr.charCodeAt() >= 48 && chr.charCodeAt() <= 57) ? d_count += 1 : null
                    
            }
            if (d_count>0 && s_ctn>0 && sl_count>0 && Cl_count>0) {
                console.log("SignUp success")
            }
            else {
                alert('Please enter a valid pin');
            }
        }
    }
    return (

        <>
            <form onSubmit={handleSubmit} className={styles.main} action='#'>
            <h2 className={styles.icon}>Login Page</h2> 
            <div className={styles.inp_containter}>
                <AccountCircleIcon className={styles.icon}/>
                    <input type="text" placeholder="Enter Your name" value={userName}
                        onChange={(e)=>setUserName(e.target.value)} />
            </div>
            <div className={styles.inp_containter}>
                <EmailIcon className={styles.icon}/>
                    <input type="email" placeholder="Enter Your email..." 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className={styles.inp_containter}>
                <LockIcon className={styles.icon} />
                    <input
                        type={showPassword ? "password" : "text"}
                        placeholder="Enter Your password..." 
                        className={styles.input_password}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    {
                        showPassword? <VisibilityIcon className={styles.icon} onClick={()=>setShowPassword(!showPassword)}/> : <VisibilityOffIcon className={styles.icon} onClick={()=>setShowPassword(!showPassword)}/>
                    }
            </div>
                <button type='submit' className={styles.btn}>Login</button>
            </form>
      </>
  )
}
