import wareki2date, {wareki2datestring} from './wareki.js'

//console.log( wareki2datestring("平成3年10月29日"))
//console.log( wareki2datestring("平成十七年十月二十九日") )
//console.log( wareki2datestring("h3年10月29日"))
//console.log( wareki2datestring("H3年10月29日"))


let counter = 0
function compare(a, b){
	const result = (a == b)
	console.log(`test sequence ${counter++}`, result, `${a} is ${b}`)
}

compare( wareki2datestring("明治元年1月1日"), "1868/01/01")
compare( wareki2datestring("大正元年1月1日"), "1912/01/01")
compare( wareki2datestring("昭和元年1月1日"), "1926/01/01")
compare( wareki2datestring("平成元年1月1日"), "1989/01/01")
compare( wareki2datestring("令和元年1月1日"), "2019/01/01")

compare( wareki2datestring("m1年1月1日"), "1868/01/01")
compare( wareki2datestring("t1年1月1日"), "1912/01/01")
compare( wareki2datestring("s1年1月1日"), "1926/01/01")
compare( wareki2datestring("h1年1月1日"), "1989/01/01")
compare( wareki2datestring("r1年1月1日"), "2019/01/01")

compare( wareki2datestring("M1年1月1日"), "1868/01/01")
compare( wareki2datestring("T1年1月1日"), "1912/01/01")
compare( wareki2datestring("S1年1月1日"), "1926/01/01")
compare( wareki2datestring("H1年1月1日"), "1989/01/01")
compare( wareki2datestring("R1年1月1日"), "2019/01/01")

compare( wareki2datestring("M1/1/1"), "1868/01/01")
compare( wareki2datestring("T1-1-1"), "1912/01/01")
compare( wareki2datestring("S1.1.1"), "1926/01/01")
compare( wareki2datestring("H1 1 1"), "1989/01/01")

compare( wareki2datestring("昭和80年1月1日"), "2005/01/01")
compare( wareki2datestring("平成2年12月31日"), "1990/12/31")
compare( wareki2datestring("平成二年十二月一日"), "1990/12/01")
compare( wareki2datestring("平成二年十二月十日"), "1990/12/10")
compare( wareki2datestring("平成二年十二月二十日"), "1990/12/20")
compare( wareki2datestring("平成二年十二月二十一日"), "1990/12/21")
compare( wareki2datestring("平成二年十二月三十一日"), "1990/12/31")

compare( wareki2datestring("2024/01/01"), "2024/01/01")


