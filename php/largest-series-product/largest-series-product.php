<?php

class Series
{
    private $serial;

    public function __construct($serialNumber)
    {
        $serial = str_split((string) $serialNumber);

        $serial = array_map("intval", $serial);

        var_dump($serial);
    }

    public function largestProduct(int $num)
    {
        $biggest = array();

        for($i = 0; $i < $num; $i++)
        {
            array_push($biggest, max($serial));
        }

    }
}
