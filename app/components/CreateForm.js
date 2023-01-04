import React, { useState } from 'react'

export default function CreateForm() {

    const [location, setLocation] = useState("");
    const [minCustomers, setMinCustomers] = useState("");
    const [maxCustomers, setMaxCustomers] = useState("");
    const [avgCookies, setAvgCookies] = useState("");
    const [fullReplyState, setFullReplyState] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        const fullReply = {
            location: location,
            minCustomers: minCustomers,
            maxCustomers: maxCustomers,
            avgCookies: avgCookies,
        }

        setFullReplyState(`location : ${location} , minCustomers : ${minCustomers} , maxCustomers : ${maxCustomers} , avgCookies : ${avgCookies}`)
        // setFullReplyState([...fullReplyState, fullReply])

    }

    return (
        <div class="mb-20 mr-20 mt-10 w-4/12 ">
            <form
                onSubmit={handleSubmit}
                class=" ">
                <div class="lex flex-wrap mb-6 border-b border-orange-400 ">

                    <label class="block uppercase tracking-wide text-orange-100	font-bold text-xs mb-2"
                    >Location</label>

                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        autoComplete="off"
                        id="location"
                        name="location"
                        type="text"
                        class="appearance-none bg-transparent text-gray-100 rounded py-3 px-4 focus:outline-none focus:bg-transparent "

                    />
                </div>
                <div class="lex flex-wrap mb-6 border-b border-orange-400">
                    <label class="block uppercase tracking-wide font-bold text-orange-100 text-xs mb-2"
                    >
                        Minimum Customers per Hour
                    </label>
                    <input
                        onChange={(e) => setMinCustomers(e.target.value)}
                        autoComplete="off"
                        id="location"
                        name="location"
                        type="text"
                        class="appearance-none bg-transparent text-gray-100 rounded py-3 px-4 focus:outline-none focus:bg-transparent "
                    />
                </div>
                <div class="lex flex-wrap mb-6 border-b border-orange-400">
                    <label class="block uppercase tracking-wide text-orange-100 text-xs mb-2"
                    >
                        Maximum Customers per Hour
                    </label>
                    <input
                        onChange={(e) => setMaxCustomers(e.target.value)}
                        autoComplete="off"
                        id="location"
                        name="location"
                        type="text"
                        class="appearance-none bg-transparent text-gray-100 rounded py-3 px-4 focus:outline-none focus:bg-transparent "
                    />
                </div>
                <div class="lex flex-wrap mb-6 border-b border-orange-400">
                    <label class="block uppercase tracking-wide text-orange-100 text-xs font-bold mb-2"
                    >
                        Average Cookies per Sale
                    </label>
                    <input
                        onChange={(e) => setAvgCookies(e.target.value)}
                        autoComplete="off"
                        id="location"
                        name="location"
                        type="text"
                        class="appearance-none bg-transparent text-gray-100 rounded py-3 px-4 focus:outline-none focus:bg-transparent "
                    />
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <button
                        class="shadow bg-orange-500 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-orange-900 font-bold py-2 px-10 rounded-full"
                    >Create</button>
                </div>
            </form>
            <section class="mx-auto text-center shadow-lg shadow-black-50">
                {fullReplyState && (
                    <div>
                        <p class="pb-2 border-b border-orange-400 text-slate-900 font-bold">
                            {fullReplyState}
                        </p>
                    </div>
                )}
            </section>
            {/* <section className="w-full pt-10 text-center shadow-lg shadow-black-50">
                {fullReplyState.length > 0 && fullReplyState.map((item, index) => {
                    return (
                        <div>
                            <p>location : {item.location} , minCustomers : {item.minCustomers} , maxCustomers : {item.maxCustomers} , avgCookies : {item.avgCookies}</p>
                        </div>
                    )
                })}
            </section> */}


        </div>

    )
}
