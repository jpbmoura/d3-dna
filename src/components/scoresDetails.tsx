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
    <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="w-full h-[300px] border p-4">
        <span className="text-neutral-500">Liberdade de Expressão</span>
        <BarChart
          data={[
            {
              Notas: "1",
              Votos: data.freedomOfSpeechData.scores["1"],
            },
            {
              Notas: "2",
              Votos: data.freedomOfSpeechData.scores["2"],
            },
            {
              Notas: "3",
              Votos: data.freedomOfSpeechData.scores["3"],
            },
            {
              Notas: "4",
              Votos: data.freedomOfSpeechData.scores["4"],
            },
            {
              Notas: "5",
              Votos: data.freedomOfSpeechData.scores["5"],
            },
          ]}
          keys={["Votos"]}
          index="Notas"
          legend="Votos"
        />
      </div>

      <div className="w-full h-[300px] border p-4">
        <span className="text-neutral-500">Segurança Psicológica</span>
        <BarChart
          data={[
            {
              Notas: "1",
              Votos: data.psychologicalSafetyData.scores["1"],
            },
            {
              Notas: "2",
              Votos: data.psychologicalSafetyData.scores["2"],
            },
            {
              Notas: "3",
              Votos: data.psychologicalSafetyData.scores["3"],
            },
            {
              Notas: "4",
              Votos: data.psychologicalSafetyData.scores["4"],
            },
            {
              Notas: "5",
              Votos: data.psychologicalSafetyData.scores["5"],
            },
          ]}
          keys={["Votos"]}
          index="Notas"
          legend="Votos"
        />
      </div>

      <div className="w-full h-[300px] border p-4">
        <span className="text-neutral-500">Confiabilidade</span>
        <BarChart
          data={[
            {
              Notas: "1",
              Votos: data.reliabilityData.scores["1"],
            },
            {
              Notas: "2",
              Votos: data.reliabilityData.scores["2"],
            },
            {
              Notas: "3",
              Votos: data.reliabilityData.scores["3"],
            },
            {
              Notas: "4",
              Votos: data.reliabilityData.scores["4"],
            },
            {
              Notas: "5",
              Votos: data.reliabilityData.scores["5"],
            },
          ]}
          keys={["Votos"]}
          index="Notas"
          legend="Votos"
        />
      </div>

      <div className="w-full h-[300px] border p-4">
        <span className="text-neutral-500">Aprendizado Contínuo</span>
        <BarChart
          data={[
            {
              Notas: "1",
              Votos: data.continuousLearningData.scores["1"],
            },
            {
              Notas: "2",
              Votos: data.continuousLearningData.scores["2"],
            },
            {
              Notas: "3",
              Votos: data.continuousLearningData.scores["3"],
            },
            {
              Notas: "4",
              Votos: data.continuousLearningData.scores["4"],
            },
            {
              Notas: "5",
              Votos: data.continuousLearningData.scores["5"],
            },
          ]}
          keys={["Votos"]}
          index="Notas"
          legend="Votos"
        />
      </div>

      <div className="w-full h-[300px] border p-4">
        <span className="text-neutral-500">Autonomia</span>
        <BarChart
          data={[
            {
              Notas: "1",
              Votos: data.autonomyData.scores["1"],
            },
            {
              Notas: "2",
              Votos: data.autonomyData.scores["2"],
            },
            {
              Notas: "3",
              Votos: data.autonomyData.scores["3"],
            },
            {
              Notas: "4",
              Votos: data.autonomyData.scores["4"],
            },
            {
              Notas: "5",
              Votos: data.autonomyData.scores["5"],
            },
          ]}
          keys={["Votos"]}
          index="Notas"
          legend="Votos"
        />
      </div>

      <div className="w-full h-[300px] border p-4">
        <span className="text-neutral-500">Integridade e Coerência</span>
        <BarChart
          data={[
            {
              Notas: "1",
              Votos: data.integrityAndCoherenceData.scores["1"],
            },
            {
              Notas: "2",
              Votos: data.integrityAndCoherenceData.scores["2"],
            },
            {
              Notas: "3",
              Votos: data.integrityAndCoherenceData.scores["3"],
            },
            {
              Notas: "4",
              Votos: data.integrityAndCoherenceData.scores["4"],
            },
            {
              Notas: "5",
              Votos: data.integrityAndCoherenceData.scores["5"],
            },
          ]}
          keys={["Votos"]}
          index="Notas"
          legend="Votos"
        />
      </div>

      <div className="w-full h-[300px] border p-4">
        <span className="text-neutral-500">Qualidade de Vida</span>
        <BarChart
          data={[
            {
              Notas: "1",
              Votos: data.qualityOfLife.scores["1"],
            },
            {
              Notas: "2",
              Votos: data.qualityOfLife.scores["2"],
            },
            {
              Notas: "3",
              Votos: data.qualityOfLife.scores["3"],
            },
            {
              Notas: "4",
              Votos: data.qualityOfLife.scores["4"],
            },
            {
              Notas: "5",
              Votos: data.qualityOfLife.scores["5"],
            },
          ]}
          keys={["Votos"]}
          index="Notas"
          legend="Votos"
        />
      </div>
    </div>
  );
};

export default ScoresDetails;
