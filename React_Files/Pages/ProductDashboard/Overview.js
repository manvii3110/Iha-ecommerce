import React from "react";
import { 
    LineChart, 
    ResponsiveContainer, 
    Legend, Tooltip, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid 
} from 'recharts'; 
const pdata = [ 
    { 
        date: '0',  
        time: 2 
    },
    { 
        date: 'Jun 27',  
        time: 0
    }, 
    { 
        date: 'Jun 29', 
        time: 0
    }, 
    { 
        date: 'Jul 01',  
        time: 1
    }, 
    { 
        date: 'Jul 05', 
        time: 0
    }, 
    { 
        date: 'Jul 07',  
        time: 0
    }, 
    { 
        date: 'Jul 09', 
        time: 2
    }, 
    { 
        date: 'Jul 11', 
        time: 1
    }, 
     
    { 
        date: 'Jul 15', 
        time: 0
    }, 
    { 
        date: 'Jul 17', 
        time: 0
    }, 
    { 
        date: 'Jul 19', 
        time: 1
    }, 
    { 
        date: 'Jul 21',  
        time: 1 
    }, 
    { 
        date: 'Jul 23', 
        time: 2
    }, 
    { 
        date: 'Jul 25', 
        time: 3
    }, 
    { 
        date: 'Jul 27', 
        time: 0
    },
    { 
        date: 'Jul 28', 
        time: 0
    },
    { 
        date: 'Jul 29', 
        time: 1
    },
    { 
        date: 'Jul 31', 
        time: 1
    },
    
    { 
        date: 'Aug 03', 
        time: 0
    },
    { 
        date: 'Aug 04', 
        time: 0
    },
    { 
        date: 'Aug 05', 
        time: 2
    },
    { 
        date: 'Aug 06', 
        time: 0
    }, 
    { 
        date: 'Aug 08', 
        time: 0
    },
    { 
        date: 'Aug 10', 
        time: 2
    },
    { 
        date: 'Aug 12', 
        time: 0
    },
    { 
        date: 'Aug 14', 
        time: 4
    },
    { 
        date: 'Aug 16', 
        time: 0
    },
    { 
        date: 'Aug 17', 
        time: 0
    },
    { 
        date: 'Aug 18', 
        time: 0
    },
    { 
        date: 'Aug 20', 
        time: 1
    },
    { 
        date: 'Aug 22', 
        time: 1
        
    },
    { 
        date: 'Aug 24', 
        time: 0
    },
]; 

const Overview = () => {
			return ( 
        <> 
            <ResponsiveContainer width="100%" aspect={4}> 
                <LineChart data={pdata} margin={{ right: 40 }}
                > 
                    <CartesianGrid /> 
                    <XAxis dataKey="date" 
                        interval={'preserveStartEnd'} /> 
                    <YAxis dataKey="time"></YAxis> 
                    <Legend /> 
                    <Tooltip /> 
                    
                    <Line dataKey="time"
                        stroke="orange" activeDot={{ r: 8 }} /> 
                </LineChart> 
            </ResponsiveContainer> 
        </> 
    );  
}
  
export default Overview;  
