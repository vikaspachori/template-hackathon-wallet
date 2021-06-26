export interface tokenBalances{
    address: string,
    quote_currency: string,
    uniswap_v2: uniSwapBalance
}

export interface uniSwapBalance{
    balances: tokenInfo[]
}


export interface tokenInfo{
    contract_decimals: number,
    contract_ticker_symbol: string,
    contract_address: string,
    logo_url: string,
    balance: number,
    quote: number,
    quote_rate: number
}