
import { User } from "../types"


type Props = {
    signIn: Function
    logOut: Function
    user: User | null
}
function Login({ signIn, logOut, user }: Props) {

    function handleOnSubmit(event: any) {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signIn(email, password)
    }


    return (
        <main>
            <form onSubmit={handleOnSubmit}>
                <h2>Login</h2>
                <input type='email' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Password' />
                <input type='submit' />

            </form>

            {user !== null ?
                <section>
                    <h2>{`hello ${user.name}`}</h2>
                    <input type='button' value='Logout' onClick={() => logOut()} />
                    <ul>{
                        user.order.map(order =>
                            <li>
                                <h3>{order.item.title}:<span>{order.quantity}</span></h3>

                                <img src={order.item.image} />
                            </li>
                        )
                    }
                    </ul>
                </section> : null}
        </main>
    )
}
export default Login