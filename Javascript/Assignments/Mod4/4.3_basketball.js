let johnScore=[101,102,103];
let mikeScore=[103,141,102];
let maryScore=[101,102,123];
let johnAvg, mikeAvg, maryAvg=0;

johnAvg= Math.round(averageScore(johnScore));
mikeAvg= Math.round(averageScore(mikeScore));
maryAvg=Math.round(averageScore(maryScore));

let win= winnerTeam(johnAvg,mikeAvg,maryAvg);
if (win===0){
    console.log(`Draw, Mike's team scored ${mikeAvg} and John's team score ${johnAvg} and Mary's team scored ${maryAvg} and therefore it is a tie!`);
}
else if (win===1)
{
    console.log(`Winner is John's Team with an Average score of ${johnAvg}`);
}
else if (win===2)
{
    console.log(`Winner is Mike's Team with an Average score of ${mikeAvg}`);
}
else if (win===3)
{
    console.log(`Winner is Mary's Team with an Average score of ${maryAvg}`);
}
else (console.log ("Error, wrong input!")) ;
    

function winnerTeam(score1,score2, score3)
{
    let max=0;
    if ((score1 === score2) & (score1===score3))
    {
        return 0;
    }
    else if ((score1 > score2) & (score1>score3))
    {
        return 1;
    }
    else if ((score2> score1) & (score2 >score3))
    {
        return 2;
    }
    else if ((score3> score1) & (score3 >score2))
    {
        return 3;
    }
    else return -1;
}

function averageScore(scoreList)
{
    let avg, total=0;
    for (let i=0;i< scoreList.length; i++ )
    {
        total=total+scoreList[i];
    }
    avg=total/scoreList.length;
    return avg;

}
