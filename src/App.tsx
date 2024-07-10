import "./App.css";
import { participants } from "./config/participants";

function App() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white my-10">
          Lista Participanți Web Dev{" "}
          <span className="text-blue-500">SummerIT</span>{" "}
        </h1>
        <div className="overflow-x-auto shadow-lg rounded-lg w-full max-w-4xl mx-8">
          <table className="min-w-full divide-y divide-gray-700 border border-gray-700 bg-gray-800">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left md:text-sm text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Nume Prenume
                </th>
                <th className="px-6 py-3 text-left md:text-sm text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Username GitHub
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {participants.map((participant, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-700 transition duration-300"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {participant.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {participant.github}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
