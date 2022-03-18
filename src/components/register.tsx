type Props = {
    signUp: Function
}
function Register({ signUp }: Props) {

    function handleOnSubmit(event: any) {
        event.preventDefault()
        const email = event.target.email.value
        const name = event.target.name.value
        const password = event.target.password.value
        signUp(email, name, password,)
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <h2>Sign Up</h2>
            <input type='email' name='email' placeholder='Email' />
            <input type='text' name='name' placeholder='Name' />
            <input type='password' name='password' placeholder='Password' />
            <input type='submit' />
        </form>
    )
}
export default Register