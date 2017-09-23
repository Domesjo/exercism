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

        for($i = 0; $i < $num; $i++)
        {
            array_push($biggest, max($this->getSerial()));
        }
        var_dump($biggest);

    }
}
