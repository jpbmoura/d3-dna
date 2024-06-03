import React from "react";
import ScoresDetails from "./scoresDetails";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { formatScores } from "@/helpers/functions/formatScores";
import BarChart from "./shared/barChart";
import { data } from "@/helpers/constants/mockedData/relationshipMock";

const scoreInitalValue = {
  average: 0,
  positiveVotes: 0,
  negativeVotes: 0,
  totalOfVotes: 0,
  scores: {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
  },
  asLeader: {
    average: 0,
    totalOfVotes: 0,
    positiveVotes: 0,
    negativeVotes: 0,
    scores: {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
    },
  },
  asNotLeader: {
    average: 0,
    totalOfVotes: 0,
    positiveVotes: 0,
    negativeVotes: 0,
    scores: {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
    },
  },
};

const RelationshipSection = () => {
  const [freedomOfSpeechData, setFreedomOfSpeechData] =
    React.useState(scoreInitalValue);
  const [psychologicalSafetyData, setPsychologicalSafetyData] =
    React.useState(scoreInitalValue);
  const [reliabilityData, setReliabilityData] =
    React.useState(scoreInitalValue);
  const [continuousLearningData, setContinuousLearningData] =
    React.useState(scoreInitalValue);
  const [autonomyData, setAutonomyData] = React.useState(scoreInitalValue);
  const [integrityAndCoherenceData, setIntegrityAndCoherenceData] =
    React.useState(scoreInitalValue);
  const [qualityOfLife, setQualityOfLife] = React.useState(scoreInitalValue);

  const prepareDataForChart = () => {
    setFreedomOfSpeechData(
      formatScores(data, freedomOfSpeechData, "Liberdade de Expressão")
    );
    setPsychologicalSafetyData(
      formatScores(data, psychologicalSafetyData, "Segurança Psicológica")
    );
    setReliabilityData(formatScores(data, reliabilityData, "Confiança"));
    setContinuousLearningData(
      formatScores(data, continuousLearningData, "Aprendizado contínuo")
    );
    setAutonomyData(formatScores(data, autonomyData, "Autonomia"));
    setIntegrityAndCoherenceData(
      formatScores(data, integrityAndCoherenceData, "Integridade e Coerência")
    );
    setQualityOfLife(formatScores(data, qualityOfLife, "Qualidade de vida"));
  };

  React.useEffect(() => {
    prepareDataForChart();
  }, []);
  return (
    <div>
      <section className="my-8 space-y-2">
        <h2 className="underline text-lg">Relações</h2>

        <div>
          <span className="text-neutral-500">
            Média de Votos x Tipo (Média Lider e Não Lider)
          </span>
          <div className="h-[400px] w-full">
            <BarChart
              data={[
                {
                  key: "Liberdade de Expressão",
                  average: freedomOfSpeechData.average.toFixed(2),
                  leader: freedomOfSpeechData.asLeader.average.toFixed(2),
                  isNotLeader:
                    freedomOfSpeechData.asNotLeader.average.toFixed(2),
                },
                {
                  key: "Segurança Psicológica",
                  average: psychologicalSafetyData.average.toFixed(2),
                  leader: psychologicalSafetyData.asLeader.average.toFixed(2),
                  isNotLeader:
                    psychologicalSafetyData.asNotLeader.average.toFixed(2),
                },
                {
                  key: "Confiança",
                  average: reliabilityData.average.toFixed(2),
                  leader: reliabilityData.asLeader.average.toFixed(2),
                  isNotLeader: reliabilityData.asNotLeader.average.toFixed(2),
                },
                {
                  key: "Aprendizado contínuo",
                  average: continuousLearningData.average.toFixed(2),
                  leader: continuousLearningData.asLeader.average.toFixed(2),
                  isNotLeader:
                    continuousLearningData.asNotLeader.average.toFixed(2),
                },
                {
                  key: "Autonomia",
                  average: autonomyData.average.toFixed(2),
                  leader: autonomyData.asLeader.average.toFixed(2),
                  isNotLeader: autonomyData.asNotLeader.average.toFixed(2),
                },
                {
                  key: "Integridade e Coerência",
                  average: integrityAndCoherenceData.average.toFixed(2),
                  leader: integrityAndCoherenceData.asLeader.average.toFixed(2),
                  isNotLeader:
                    integrityAndCoherenceData.asNotLeader.average.toFixed(2),
                },
                {
                  key: "Qualidade de vida",
                  average: qualityOfLife.average.toFixed(2),
                  leader: qualityOfLife.asLeader.average.toFixed(2),
                  isNotLeader: qualityOfLife.asNotLeader.average.toFixed(2),
                },
              ]}
              keys={["average", "leader", "isNotLeader"]}
              index="key"
              type="grouped"
              color={["#8bd3c7", "#7eb0d5", "#ffb55a"]}
              markers={{
                axis: "y",
                value:
                  (freedomOfSpeechData.average +
                    psychologicalSafetyData.average +
                    reliabilityData.average +
                    continuousLearningData.average +
                    autonomyData.average +
                    integrityAndCoherenceData.average +
                    qualityOfLife.average) /
                  7,
                lineColor: "#000",
                legend:
                  "Média Geral: " +
                  (
                    (freedomOfSpeechData.average +
                      psychologicalSafetyData.average +
                      reliabilityData.average +
                      continuousLearningData.average +
                      autonomyData.average +
                      integrityAndCoherenceData.average +
                      qualityOfLife.average) /
                    7
                  ).toFixed(2),
              }}
            />
          </div>
        </div>

        <div>
          <span className="text-neutral-500">
            Favorabilidade (Votos Positivos x Votos Negativos)
          </span>
          <div className="h-[400px] w-full">
            <BarChart
              data={[
                {
                  key: "Liberdade de Expressão",
                  total: (
                    (freedomOfSpeechData.positiveVotes /
                      freedomOfSpeechData.totalOfVotes) *
                    100
                  ).toFixed(0),
                  leader: (
                    (freedomOfSpeechData.asLeader.positiveVotes /
                      freedomOfSpeechData.asLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                  notLeader: (
                    (freedomOfSpeechData.asNotLeader.positiveVotes /
                      freedomOfSpeechData.asNotLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                },
                {
                  key: "Segurança Psicológica",
                  total: (
                    (psychologicalSafetyData.positiveVotes /
                      psychologicalSafetyData.totalOfVotes) *
                    100
                  ).toFixed(0),
                  leader: (
                    (psychologicalSafetyData.asLeader.positiveVotes /
                      psychologicalSafetyData.asLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                  notLeader: (
                    (psychologicalSafetyData.asNotLeader.positiveVotes /
                      psychologicalSafetyData.asNotLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                },
                {
                  key: "Confiança",
                  total: (
                    (reliabilityData.positiveVotes /
                      reliabilityData.totalOfVotes) *
                    100
                  ).toFixed(0),
                  leader: (
                    (reliabilityData.asLeader.positiveVotes /
                      reliabilityData.asLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                  notLeader: (
                    (reliabilityData.asNotLeader.positiveVotes /
                      reliabilityData.asNotLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                },
                {
                  key: "Aprendizado contínuo",
                  total: (
                    (continuousLearningData.positiveVotes /
                      continuousLearningData.totalOfVotes) *
                    100
                  ).toFixed(0),
                  leader: (
                    (continuousLearningData.asLeader.positiveVotes /
                      continuousLearningData.asLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                  notLeader: (
                    (continuousLearningData.asNotLeader.positiveVotes /
                      continuousLearningData.asNotLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                },
                {
                  key: "Autonomia",
                  total: (
                    (autonomyData.positiveVotes / autonomyData.totalOfVotes) *
                    100
                  ).toFixed(0),
                  leader: (
                    (autonomyData.asLeader.positiveVotes /
                      autonomyData.asLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                  notLeader: (
                    (autonomyData.asNotLeader.positiveVotes /
                      autonomyData.asNotLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                },
                {
                  key: "Integridade e Coerência",
                  total: (
                    (integrityAndCoherenceData.positiveVotes /
                      integrityAndCoherenceData.totalOfVotes) *
                    100
                  ).toFixed(0),
                  leader: (
                    (integrityAndCoherenceData.asLeader.positiveVotes /
                      integrityAndCoherenceData.asLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                  notLeader: (
                    (integrityAndCoherenceData.asNotLeader.positiveVotes /
                      integrityAndCoherenceData.asNotLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                },
                {
                  key: "Qualidade de vida",
                  total: (
                    (qualityOfLife.positiveVotes / qualityOfLife.totalOfVotes) *
                    100
                  ).toFixed(0),
                  leader: (
                    (qualityOfLife.asLeader.positiveVotes /
                      qualityOfLife.asLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                  notLeader: (
                    (qualityOfLife.asNotLeader.positiveVotes /
                      qualityOfLife.asNotLeader.totalOfVotes) *
                    100
                  ).toFixed(0),
                },
              ]}
              keys={["total", "leader", "notLeader"]}
              index="key"
              type="grouped"
              color={["#8bd3c7", "#7eb0d5", "#ffb55a"]}
              format={(v: number) => `${v}%`}
              markers={{
                axis: "y",
                value:
                  ((freedomOfSpeechData.positiveVotes +
                    psychologicalSafetyData.positiveVotes +
                    reliabilityData.positiveVotes +
                    continuousLearningData.positiveVotes +
                    autonomyData.positiveVotes +
                    integrityAndCoherenceData.positiveVotes +
                    qualityOfLife.positiveVotes) /
                    (freedomOfSpeechData.totalOfVotes +
                      psychologicalSafetyData.totalOfVotes +
                      reliabilityData.totalOfVotes +
                      continuousLearningData.totalOfVotes +
                      autonomyData.totalOfVotes +
                      integrityAndCoherenceData.totalOfVotes +
                      qualityOfLife.totalOfVotes)) *
                  100,
                lineColor: "#000",
                legend:
                  "Média Geral: " +
                  (
                    ((freedomOfSpeechData.positiveVotes +
                      psychologicalSafetyData.positiveVotes +
                      reliabilityData.positiveVotes +
                      continuousLearningData.positiveVotes +
                      autonomyData.positiveVotes +
                      integrityAndCoherenceData.positiveVotes +
                      qualityOfLife.positiveVotes) /
                      (freedomOfSpeechData.totalOfVotes +
                        psychologicalSafetyData.totalOfVotes +
                        reliabilityData.totalOfVotes +
                        continuousLearningData.totalOfVotes +
                        autonomyData.totalOfVotes +
                        integrityAndCoherenceData.totalOfVotes +
                        qualityOfLife.totalOfVotes)) *
                    100
                  ).toFixed(0) +
                  "%",
              }}
            />
          </div>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex flex-row justify-start gap-1">
              <span>Mostrar Detalhes</span>
            </AccordionTrigger>
            <AccordionContent>
              <ScoresDetails
                data={{
                  freedomOfSpeechData,
                  psychologicalSafetyData,
                  reliabilityData,
                  continuousLearningData,
                  autonomyData,
                  integrityAndCoherenceData,
                  qualityOfLife,
                }}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default RelationshipSection;
