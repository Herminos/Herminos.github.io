from qiskit import QuantumCircuit, BasicAer, execute
from qiskit.visualization import plot_histogram
import matplotlib.pyplot as plt

# create a quantum circuit with one qubit and one bit
qc = QuantumCircuit(2,1)

qc.h(0)
qc.cx(0,1)
qc.h(1)

qc.x(0)
qc.cx(0,1)

qc.measure(0,0)
# plot the circuit
qc.draw('mpl')

# simulation: run the quantum circuit 1000 times and print all results
# note that qasm_simulator is used for measurements
backend = BasicAer.get_backend('qasm_simulator') 
result = execute(qc, backend, shots=1000).result()
counts  = result.get_counts(qc)
print(counts)
# visualize results
plot_histogram(counts)
plt.show()

input("Press Enter to continue...")
