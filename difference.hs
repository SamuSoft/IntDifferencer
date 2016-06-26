main::IO ()
main = getContents >>= putStr . printall . compute . readLines . lines


printall:: [Int] -> String
printall list = unlines (map show list)

compute:: [(Int,Int)] -> [Int]
compute list = map singleCompute list

singleCompute:: (Int,Int) -> Int
singleCompute (a,b) 
   | a > b = a - b
   | otherwise = b - a

readLines:: [String] -> [(Int,Int)]
readLines list = map translate (map words list)

translate:: [String] -> (Int,Int)
translate [a , b] = ((read a :: Int),(read b :: Int))