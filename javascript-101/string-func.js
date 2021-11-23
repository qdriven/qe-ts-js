let str1="str1"
let str2="str2"
let str = str1+"-"+str2
let startIndex = 1
let count=1
let endIndex = 2
str.split('-')   //按-分割字符串返回一个数组
str.substr(startIndex , count)    //返回截取的新字符串 
str.substring(startIndex , endIndex)     //返回新字符串（包括startIndex不包括endIndex）
str.slice(startIndex , endIndex)     //返回新字符串（包括startIndex不包括endIndex）
str.replace("str" ,"trs")     //替换字符串
str.toLowerCase()     //转小写
str.toUpperCase()     //转大写
str.trim()     //去除两端空格
str.charAt ( 2 )     //返回index位置的字符
str.concat ( str1 , str2 )   //返回拼接后的新字符串
str.indexOf (str1 , 0)    //返回str1的位置索引，没有返回-1
str.lastIndexOf ( str1 )   //从后向前找返回str1的位置索引，没有返回-1