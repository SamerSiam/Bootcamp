let personName1='Sarah';

let SarahCountry= countryTolive('Indonesian',true,258);

if (SarahCountry !=-1)
{
    console.log (`${personName}, you should live in ${SarahCountry}!`)
}
else console.log (`We could not find a country for you!`);
function countryTolive(language,isIsland,Population)
{
    if (language==='English' && isIsland===false && Population<=330)
    {
        return 'USA';
    }
    if (language==='Indonesian' && isIsland===true && Population<=260)
    {
        return 'Indonesia';
    }
    return -1;
}