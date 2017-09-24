<?php



class Series
{
    private $serial;

    public function __construct($serialNumber)
    {
        $serial = str_split((string) $serialNumber);

        $this->serial = array_map(function ($number)
        {
            if(preg_match("/[a-zA-Z]/", $number))
            {
                throw new InvalidArgumentException("bruh");
            }
            return intval($number);
        }, $serial);
    }

    private function getSerial()
    {
        return $this->serial;
    }

    public function largestProduct(int $num)
    {
        $biggest = 0;
        $serial = $this->getSerial();

        if ($num > count($serial) || $num >= count($serial) && count($serial) <= 1 || $num < 0)
        {
            throw new InvalidArgumentException("bruuh");
        }

        for($i = 0; $i <= (count($serial) - $num); $i++)
        {
            $products = array();
            for($z = 0; $z < $num; $z++)
            {
                array_push($products, $serial[$i + $z]);
            }

            $ans = array_reduce($products, function ($array, $number)
                {
                    $array *= $number;
                    return $array;
                }, 1);

            if($ans > $biggest)
            {
                $biggest = $ans;
            }
        }
        return $biggest;


    }
}
