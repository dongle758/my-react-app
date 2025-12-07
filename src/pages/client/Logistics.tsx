import { useParams } from 'react-router-dom';
import { Truck, Package, MapPin, CheckCircle2, Circle } from 'lucide-react';

const logisticsSteps = [
  { time: '2024-01-16 14:30', status: 'completed', text: '快件已到达【北京分拨中心】', location: '北京' },
  { time: '2024-01-16 10:20', status: 'completed', text: '快件已从【上海分拨中心】发出', location: '上海' },
  { time: '2024-01-15 18:00', status: 'completed', text: '快件已到达【上海分拨中心】', location: '上海' },
  { time: '2024-01-15 15:30', status: 'completed', text: '快件已从【商家仓库】发出', location: '上海' },
  { time: '2024-01-15 14:00', status: 'pending', text: '商家已发货', location: '上海' },
];

export const Logistics = () => {
  const { id } = useParams();
  const order = {
    id: id,
    company: '顺丰快递',
    number: 'SF1234567890',
    status: '运输中',
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">物流跟踪</h1>

      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Truck className="h-6 w-6 text-primary" />
          <div>
            <h2 className="text-xl font-semibold">{order.company}</h2>
            <p className="text-gray-500">运单号：{order.number}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">物流状态：</span>
          <span className="text-primary font-semibold">{order.status}</span>
        </div>
      </div>

      {/* 物流时间线 */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">物流跟踪</h2>
        <div className="relative">
          {logisticsSteps.map((step, index) => (
            <div key={index} className="flex gap-4 pb-6 last:pb-0">
              <div className="flex flex-col items-center">
                {step.status === 'completed' ? (
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                ) : (
                  <Circle className="h-6 w-6 text-gray-300" />
                )}
                {index < logisticsSteps.length - 1 && (
                  <div className={`w-0.5 h-full ${step.status === 'completed' ? 'bg-primary' : 'bg-gray-200'}`}></div>
                )}
              </div>
              <div className="flex-1 pb-6 last:pb-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{step.text}</span>
                  <span className="text-sm text-gray-500">({step.location})</span>
                </div>
                <p className="text-sm text-gray-500">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

