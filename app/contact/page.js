// app/contact/page.js
export const metadata = {
    title: "コンタクト｜ウッホウホウホハウス",
    description: "海苔巻きの一大生産地である纒向遺跡では、海苔巻きを今日も剥いています。"
  }

const Contact = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>Contact</h1>
                    <p>お気軽にff外ください。</p>
                    <form>
                        <label htmlFor="name">お名前</label>
                        <input type="text" name="name" id="name" required />
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" name="email" id="email" required />
                        <label htmlFor="textarea">ご用件</label>
                        <textarea name="message" rows="10" id="textarea" required></textarea>
                        <button type="submit">送信</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact