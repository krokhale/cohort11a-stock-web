import React, {useState, useEffect} from 'react';
// import yahooFinance from 'yahoo-finance';
// import yahooStockPrices from 'yahoo-stock-prices'

function Search(props) {
    // yahooFinance.quote({
    //     symbol: 'AAPL',
    //     modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
    // }, function (err, quotes) {
    //     console.log(err)
    //     console.log(quotes)
    // });
    const [inputText, setInputText] = useState('');


    const fetchQuote = async () => {
        const res = await fetch(`http://localhost:3000/api/v1/stocks/search/${inputText}`);
        let json = await res.json();
        console.log(json)
        setInputText('')
    };

    const onInputChange = async (ev) => {
        console.log(ev.currentTarget.value)
        setInputText(ev.currentTarget.value);
    };

    return (
        <div className={'border p-5'}>

            <div className="grid grid-cols-2">
                <div className={'border p-5'}>
                    <input value={inputText} onChange={onInputChange} type="text" className={'border w-full p-3 rounded-full border-gray-300'}/>
                </div>
                <div className={'border p-5'}>
                    <span onClick={fetchQuote} className={'bg-gray-600 cursor-pointer p-2 rounded text-white text-xl pl-5 pr-5'}>Get Quote</span>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <div className={'border p-5'}>
                    <h1 className={'text-2xl'}>BHP - BHP Group Limited</h1>
                </div>
                <div className={'border p-5'}>

                    <span className={'bg-blue-600 cursor-pointer p-2 rounded text-white text-xl pl-5 pr-5'}>Buy</span>&nbsp;&nbsp;&nbsp;
                    <span className={'bg-red-600 cursor-pointer p-2 rounded text-white text-xl pl-5 pr-5'}>Sell</span>

                </div>
            </div>

        </div>
    );
}

export default Search;
