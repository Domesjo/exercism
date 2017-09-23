<?php

class Series
{
    private $serial;

    public function __construct($serialNumber)
    {
        $serial = str_split((string) $serialNumber);

        $this->serial = array_map("intval", $serial);
    }

    private function getSerial()
    {
        return $this->serial;
    }

    public function largestProduct(int $num)
    {
        $biggest = array();
        $serial = $this->getSerial();

        for($i = 0; $i < $num; $i++)
        {
            $currentBiggest = max($serial);
            array_push($biggest, $currentBiggest);
            unset($serial[array_search($currentBiggest, $serial)]);
        }

        function times($array, $number)
        {
           $array *= $number;
           return $array;
        }

        return array_reduce($biggest, "times", 1);
    }
}
