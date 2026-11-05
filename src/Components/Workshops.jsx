function Workshops()  {
    return (
        <main className="container">
            <h1>Upcoming workshops</h1>
            <div className="grid">
                <section className="card">
                    <SectionTitle title="Intro to React" />
                    <p className="level">
                        Beginner - 2 hours
                    </p>
                    <p>Components, JSX and props, built from scratch</p>
                    <button className="btn btn-primary">Register</button>
                </section>

                <section className="card">
                    <h2>React State and Events</h2>
                    <p className="level">
                        Beginner - 3 hours
                    </p>
                    <p>make your interface respond to click and typing</p>
                    <button className="btn btn-primary">Register</button>
                </section>

                <section className="card">
                    <p className="level">
                        Beginner - 1.5 hours
                    </p>
                    <p>Put your online with live link</p>
                </section>
            </div>

            <div className="action">
                {/* <Button label="View all workshops" variant="outline" /> */}
                <CustomButton label="View all workshops" variant="outline"/>
            </div>
        </main>
    )
}

export default Workshops;

function SectionTitle (props) {
    return (
     <h2>{props.title} </h2>
    )
}

function CustomButton({label, variant}) {
    return (
        <button className={`btn btn-${variant}`}>{label}</button>
    )
}