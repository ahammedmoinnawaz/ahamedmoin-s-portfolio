import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";

const BlogPost = () => {
  const { slug } = useParams();
  
  const blogPosts = {
    "creating-interactive-dashboards-in-power-bi": {
      title: "Creating Interactive Dashboards in Power BI",
      date: "7/2/2025",
      readTime: "5 min read",
      content: `
        <h2>Introduction to Power BI Dashboards</h2>
        <p>Power BI is a powerful business intelligence tool that allows you to create stunning, interactive dashboards that help businesses make data-driven decisions. In this comprehensive guide, we'll explore the key concepts and best practices for building effective dashboards.</p>
        
        <h2>Key Components of an Effective Dashboard</h2>
        <p>An effective Power BI dashboard should include:</p>
        <ul>
          <li>Clear and meaningful KPIs</li>
          <li>Interactive visualizations</li>
          <li>Proper data filtering capabilities</li>
          <li>Intuitive navigation</li>
          <li>Mobile-responsive design</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>When designing your dashboard, remember to keep it simple, focus on the most important metrics, and ensure that your visualizations tell a clear story about your data.</p>
      `
    },
    "advanced-excel-techniques-for-data-analysts": {
      title: "Advanced Excel Techniques for Data Analysts",
      date: "7/2/2025",
      readTime: "7 min read",
      content: `
        <h2>Mastering Excel for Data Analysis</h2>
        <p>Excel remains one of the most powerful tools for data analysts. Beyond basic spreadsheet functionality, Excel offers advanced features that can significantly enhance your analytical capabilities.</p>
        
        <h2>Advanced Functions Every Analyst Should Know</h2>
        <ul>
          <li>XLOOKUP and INDEX/MATCH for complex data retrieval</li>
          <li>SUMIFS and COUNTIFS for conditional aggregations</li>
          <li>Power Query for data transformation</li>
          <li>PivotTables for quick data summarization</li>
          <li>VBA for automation</li>
        </ul>
        
        <h2>Data Visualization in Excel</h2>
        <p>Learn how to create compelling charts and graphs that effectively communicate your findings to stakeholders.</p>
      `
    },
    "data-cleaning-best-practices-and-common-pitfalls": {
      title: "Data Cleaning Best Practices and Common Pitfalls",
      date: "7/2/2025",
      readTime: "6 min read",
      content: `
        <h2>The Foundation of Good Analysis: Clean Data</h2>
        <p>Data cleaning is often said to take up 80% of a data analyst's time, and for good reason. The quality of your analysis is directly dependent on the quality of your data.</p>
        
        <h2>Common Data Quality Issues</h2>
        <ul>
          <li>Missing values and how to handle them</li>
          <li>Duplicate records and deduplication strategies</li>
          <li>Inconsistent formatting and standardization</li>
          <li>Outliers and their impact on analysis</li>
          <li>Data type mismatches</li>
        </ul>
        
        <h2>Tools and Techniques</h2>
        <p>Explore the best tools and methodologies for efficient data cleaning, including Python pandas, Excel Power Query, and SQL techniques.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <TopNavigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <Card>
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">{post.date} • {post.readTime}</div>
                <h1 className="text-4xl font-bold">{post.title}</h1>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Ahammed Moin Nawaz</div>
                    <div className="text-sm text-muted-foreground">Data Analyst & Business Intelligence Specialist</div>
                  </div>
                  <Link to="/">
                    <Button>Read More Posts</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default BlogPost;