
function wareki2date(str){
	if( !str ) return null
	if( str instanceof Date ) return str

	const d = new Date(str)
	if( !isNaN(d) ){
		return d
	}

	if( typeof(str) !== "string" ){
		return null
	}

	str = kansuuji2num( str.replace("元年", "1年") )

	//console.log("translate", str)

	let [year, month, day] = str.split(/[年月日\.\#\-\/\s]/)

	year = parseYear(year)

	//console.log("result", year, month, day)
	
	return new Date(year, month - 1, day)
	
}

function wareki2datestring(str, format = "YYYY/MM/DD"){
	const date = wareki2date(str)
	return formatDate(date, format)
}

function kansuuji2num( str ){
	const array = str.split("")
	let cur = null
	let num = 0
	let st = null
	let result = ""
	
	const numtext = "一二三四五六七八九".split("")
	const ketatext = "十百千".split("")
	const keta = [10, 100, 1000]
	for(let i=0; i<array.length ; i++){
		const ch = array[i]
		if( numtext.includes( ch ) ){
			const index = numtext.indexOf( ch ) + 1
			cur = index
			if( st === null ) st = i
		}else if(ketatext.includes(ch)){
			const index = ketatext.indexOf(ch) 
			num += (cur ?? 1) * keta[index]
			cur = null
			if( st === null ) st = i
		}else{
			if( st ){
				if( cur ) num += cur
				result += num
				cur = null
				st = null
				num = 0
			}
			result += ch
		}
	}
	return result
}

function parseYear(year){
	if( year === undefined || year === ""){
		return 0
	}
	const result =  year.match(/(明治|大正|昭和|平成|令和|m|t|s|h|r)(\d+)/i)

	if( !result ) return 0
	const [match, head, num] = result

	//console.log("match", year, match, head, num)

	const s = String(head).toLowerCase()

	if(match && (head === "明治" || s === "m") ){
		return parseInt(num) + 1867
	}else if(match && (head === "大正" || s === "t") ){
		return parseInt(num) + 1911
	}else if(match && (head === "昭和" || s === "s") ){
		return parseInt(num) + 1925
	}else if(match && (head === "平成" || s === "h") ){
		return parseInt(num) + 1988
	}else if(match && (head === "令和" || s === "r") ){
		return parseInt(num) + 2018
	}else{
		return year
	}
	
}

function formatDate(date, format = "YYYY/MM/DD hh:mm:ss") {
	
	if(date === undefined || date === null){
		format = format.replace(/YYYY/g, '----');
		format = format.replace(/MM/g, '--');
		format = format.replace(/DD/g, '--');
		format = format.replace(/hh/g, '--');
		format = format.replace(/mm/g, '--');
		format = format.replace(/ss/g, '--');
		
		return format;
	}
	
	if(typeof(date) === "string"){
		date = new Date(date);
	}

	const ss = (val)=> { return ("00"+val).slice(-2) };
	
	format = format.replace(/YYYY/g, date.getFullYear());
	format = format.replace(/MM/g, ss( date.getMonth()+1 ) );
	format = format.replace(/DD/g, ss( date.getDate() ) );
	format = format.replace(/hh/g, ss( date.getHours() ) );
	format = format.replace(/mm/g, ss( date.getMinutes() ) );
	format = format.replace(/ss/g, ss( date.getSeconds() ) );

	return format;
}


//********************************************************
//********************************************************
//********************************************************
//module.exports = {wareki2date, wareki2datestring}
export default wareki2date
export {wareki2date, wareki2datestring}

		
