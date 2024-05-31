"use client";

import BarChart from "./shared/barChart";

const ScoresDetails = ({
  data,
}: {
  data: {
    freedomOfSpeechData: any;
    psychologicalSafetyData: any;
    reliabilityData: any;
    continuousLearningData: any;
    autonomyData: any;
    integrityAndCoherenceData: any;
    qualityOfLife: any;
  };
}) => {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border p-4 space-y-4">
        <BarChart
          title="Liberdade de Expressão"
          color="#881337"
          data={[
            ["Notas", "Votos"],
            ["1", data.freedomOfSpeechData.scores["1"]],
            ["2", data.freedomOfSpeechData.scores["2"]],
            ["3", data.freedomOfSpeechData.scores["3"]],
            ["4", data.freedomOfSpeechData.scores["4"]],
            ["5", data.freedomOfSpeechData.scores["5"]],
          ]}
        />
      </div>

      <div className="border p-4 space-y-4">
        <BarChart
          title="Segurança Psicológica"
          color="#701a75"
          data={[
            ["Notas", "Votos"],
            ["1", data.psychologicalSafetyData.scores["1"]],
            ["2", data.psychologicalSafetyData.scores["2"]],
            ["3", data.psychologicalSafetyData.scores["3"]],
            ["4", data.psychologicalSafetyData.scores["4"]],
            ["5", data.psychologicalSafetyData.scores["5"]],
          ]}
        />
      </div>

      <div className="border p-4 space-y-4">
        <BarChart
          title="Confiabilidade"
          color="#312e81"
          data={[
            ["Notas", "Votos"],
            ["1", data.reliabilityData.scores["1"]],
            ["2", data.reliabilityData.scores["2"]],
            ["3", data.reliabilityData.scores["3"]],
            ["4", data.reliabilityData.scores["4"]],
            ["5", data.reliabilityData.scores["5"]],
          ]}
        />
      </div>

      <div className="border p-4 space-y-4">
        <BarChart
          title="Aprendizado contínuo"
          color="#0c4a6e"
          data={[
            ["Notas", "Votos"],
            ["1", data.continuousLearningData.scores["1"]],
            ["2", data.continuousLearningData.scores["2"]],
            ["3", data.continuousLearningData.scores["3"]],
            ["4", data.continuousLearningData.scores["4"]],
            ["5", data.continuousLearningData.scores["5"]],
          ]}
        />
      </div>

      <div className="border p-4 space-y-4">
        <BarChart
          title="Autonomia"
          color="#134e4a"
          data={[
            ["Notas", "Votos"],
            ["1", data.autonomyData.scores["1"]],
            ["2", data.autonomyData.scores["2"]],
            ["3", data.autonomyData.scores["3"]],
            ["4", data.autonomyData.scores["4"]],
            ["5", data.autonomyData.scores["5"]],
          ]}
        />
      </div>

      <div className="border p-4 space-y-4">
        <BarChart
          title="Integridade e Coerência"
          color="#064e3b"
          data={[
            ["Notas", "Votos"],
            ["1", data.integrityAndCoherenceData.scores["1"]],
            ["2", data.integrityAndCoherenceData.scores["2"]],
            ["3", data.integrityAndCoherenceData.scores["3"]],
            ["4", data.integrityAndCoherenceData.scores["4"]],
            ["5", data.integrityAndCoherenceData.scores["5"]],
          ]}
        />
      </div>

      <div className="border p-4 space-y-4">
        <BarChart
          title="Qualidade de vida"
          color="#78350f"
          data={[
            ["Notas", "Votos"],
            ["1", data.qualityOfLife.scores["1"]],
            ["2", data.qualityOfLife.scores["2"]],
            ["3", data.qualityOfLife.scores["3"]],
            ["4", data.qualityOfLife.scores["4"]],
            ["5", data.qualityOfLife.scores["5"]],
          ]}
        />
      </div>
    </div>
  );
};

export default ScoresDetails;
