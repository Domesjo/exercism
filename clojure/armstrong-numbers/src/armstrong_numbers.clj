(ns armstrong-numbers)
(require '[clojure.string :as str])

;; get the length of the string
(defn armstrong? [n]
    (let [
          num-length (count (str n))
          num n
          splited-num (str/split (str n) #"")]
         ( = n
           (reduce +
             (map
               (fn [x] (reduce * (repeat num-length (read-string x))))
               splited-num)))))
