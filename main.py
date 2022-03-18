import time

start_time = time.time()
sentence = "this is what you gotta write to test your wpm."

inp = input(f">> {sentence}\n")

correct = 0

for i,v in enumerate(sentence):
    try:
        if inp[i] == v:
            correct += 1
    except Exception:
        break

time_taken = time.time()-start_time

print(f"WPM: {len(inp)*60/(5*time_taken)}\nAccuracy: {correct/len(sentence)*100}%")
