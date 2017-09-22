<?php

function squareOfSums(int $sqr)
{
    return addedSum($sqr, '+') * addedSum($sqr, '+');
}

function sumOfSquares(int $sqr)
{
    return addedSum($sqr, '^');
}

function difference(int $diff)
{
    return squareOfSums($diff) - sumOfSquares($diff);
}


function addedSum(int $n, $operator)
{
    $sum = 0;
    for ($i = 0 ; $i <= $n ;$i++)
    {
        if($operator == '+')
        {
            $sum = $sum + $i;
        } else if ($operator == '^')
        {
            $sum = $sum + pow($i, 2);
        } else {
            throw new Error("Inavlid operator");
        }
    }
    return $sum;
}
