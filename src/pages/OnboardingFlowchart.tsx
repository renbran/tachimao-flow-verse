import { useState, useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  NodeProps,
  Handle,
  Position,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { onboardingStages, OnboardingStage } from '@/types/onboarding';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, User, ChevronLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Custom Node Component
const StageNode = ({ data }: NodeProps) => {
  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'initial':
        return 'bg-blue-500 border-blue-600';
      case 'classification':
        return 'bg-purple-500 border-purple-600';
      case 'configuration':
        return 'bg-orange-500 border-orange-600';
      case 'training':
        return 'bg-green-500 border-green-600';
      case 'assessment':
        return 'bg-red-500 border-red-600';
      default:
        return 'bg-gray-500 border-gray-600';
    }
  };

  return (
    <div className={`px-4 py-3 shadow-lg rounded-lg border-2 ${getCategoryColor(data.category)} min-w-[200px] max-w-[250px]`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="text-white">
        <div className="font-bold text-sm mb-1">{data.label}</div>
        <div className="text-xs opacity-90 line-clamp-2">{data.description}</div>
        <div className="mt-2 text-xs">
          <Badge variant="secondary" className="text-xs">
            {data.requirementCount} requirements
          </Badge>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
};

const nodeTypes = {
  stageNode: StageNode,
};

const OnboardingFlowchart = () => {
  const [selectedStage, setSelectedStage] = useState<OnboardingStage | null>(null);

  // Define nodes
  const initialNodes: Node[] = onboardingStages.map((stage, index) => ({
    id: stage.id,
    type: 'stageNode',
    position: {
      x: index % 2 === 0 ? 100 : 500,
      y: Math.floor(index / 2) * 200 + 50,
    },
    data: {
      label: stage.title,
      description: stage.description,
      category: stage.category,
      requirementCount: stage.requirements.length,
      stage: stage,
    },
  }));

  // Define edges (connections between nodes)
  const initialEdges: Edge[] = [
    {
      id: 'e1-2',
      source: 'user-jd-gathering',
      target: 'work-classification',
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: 'e2-3a',
      source: 'work-classification',
      target: 'manager-session',
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed },
      label: 'Managers',
      labelStyle: { fill: '#666', fontSize: 12 },
    },
    {
      id: 'e2-4',
      source: 'work-classification',
      target: 'access-configuration',
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed },
      label: 'All Staff',
      labelStyle: { fill: '#666', fontSize: 12 },
    },
    {
      id: 'e3-5',
      source: 'manager-session',
      target: 'system-training',
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: 'e4-5',
      source: 'access-configuration',
      target: 'system-training',
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: 'e5-6',
      source: 'system-training',
      target: 'open-discussion',
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: 'e6-7',
      source: 'open-discussion',
      target: 'materials-sharing',
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: 'e7-8',
      source: 'materials-sharing',
      target: 'mock-testing',
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    const stage = onboardingStages.find(s => s.id === node.id);
    setSelectedStage(stage || null);
  }, []);

  const getCategoryBadgeColor = (category?: string) => {
    switch (category) {
      case 'initial':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'classification':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'configuration':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'training':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'assessment':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            className="mb-2"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Onboarding Flowchart
          </h1>
          <p className="text-slate-600">
            Comprehensive employee onboarding process with detailed requirements for each stage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Flowchart Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-2">
              <CardHeader>
                <CardTitle>Onboarding Process Flow</CardTitle>
                <CardDescription>
                  Click on any stage to view detailed requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[700px] bg-slate-50">
                  <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onNodeClick={onNodeClick}
                    nodeTypes={nodeTypes}
                    fitView
                    className="bg-slate-50"
                  >
                    <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                    <Controls />
                  </ReactFlow>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl border-2 sticky top-8">
              <CardHeader>
                <CardTitle>Stage Details</CardTitle>
                <CardDescription>
                  {selectedStage ? 'Requirements and checklist' : 'Select a stage to view details'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedStage ? (
                  <ScrollArea className="h-[630px] pr-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {selectedStage.title}
                        </h3>
                        <Badge className={getCategoryBadgeColor(selectedStage.category)}>
                          {selectedStage.category?.toUpperCase()}
                        </Badge>
                        <p className="text-sm text-slate-600 mt-3">
                          {selectedStage.description}
                        </p>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-lg mb-3 flex items-center">
                          <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                          Requirements ({selectedStage.requirements.length})
                        </h4>

                        <Accordion type="single" collapsible className="w-full">
                          {selectedStage.requirements.map((req, index) => (
                            <AccordionItem key={req.id} value={req.id}>
                              <AccordionTrigger className="text-left">
                                <div className="flex items-start gap-2">
                                  <Badge variant="outline" className="mt-1">
                                    {index + 1}
                                  </Badge>
                                  <span className="font-medium">{req.title}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-3 pl-9">
                                  <p className="text-sm text-slate-600">
                                    {req.description}
                                  </p>

                                  {req.duration && (
                                    <div className="flex items-center text-sm text-slate-600">
                                      <Clock className="mr-2 h-4 w-4" />
                                      <span className="font-medium">Duration:</span>
                                      <span className="ml-1">{req.duration}</span>
                                    </div>
                                  )}

                                  {req.responsible && (
                                    <div className="flex items-center text-sm text-slate-600">
                                      <User className="mr-2 h-4 w-4" />
                                      <span className="font-medium">Responsible:</span>
                                      <span className="ml-1">{req.responsible}</span>
                                    </div>
                                  )}

                                  {req.checklist && req.checklist.length > 0 && (
                                    <div className="mt-3">
                                      <p className="font-medium text-sm mb-2">Checklist:</p>
                                      <ul className="space-y-1">
                                        {req.checklist.map((item, idx) => (
                                          <li key={idx} className="flex items-start text-sm">
                                            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="h-[630px] flex items-center justify-center text-center">
                    <div className="text-slate-400">
                      <div className="text-6xl mb-4">📋</div>
                      <p className="text-lg">Click on any stage in the flowchart</p>
                      <p className="text-sm">to view its detailed requirements</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">
                Total Stages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">
                {onboardingStages.length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">
                Total Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">
                {onboardingStages.reduce((acc, stage) => acc + stage.requirements.length, 0)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">
                {new Set(onboardingStages.map(s => s.category)).size}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">
                Avg. Req/Stage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">
                {(onboardingStages.reduce((acc, stage) => acc + stage.requirements.length, 0) / onboardingStages.length).toFixed(1)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OnboardingFlowchart;
