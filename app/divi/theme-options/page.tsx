import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Divi Theme Options - MitBridge Documentation',
  description: 'Learn how to configure and customize your Divi theme settings.'
}

export default function DiviThemeOptions() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Theme Options</h1>
        <p className="text-lg text-muted-foreground">
          Configure your Divi theme settings to customize the look and
          functionality of your website.
        </p>
      </div>

      <Alert>
        <AlertTitle>Save Your Changes</AlertTitle>
        <AlertDescription>
          Remember to click the &quot;Save Changes&quot; button after modifying
          any theme options. Consider exporting your settings as a backup before
          making major changes.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Accessing Theme Options</CardTitle>
            <CardDescription>
              How to find and navigate the Divi theme settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal space-y-3 pl-4">
              <li>Log in to your WordPress dashboard</li>
              <li>Navigate to &quot;Divi&quot; in the main menu</li>
              <li>Select &quot;Theme Options&quot; from the dropdown</li>
              <li>Use the tabs to access different setting categories</li>
            </ol>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="general">
            <AccordionTrigger>General Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Logo:</strong> Upload and configure your site logo
                </li>
                <li>
                  <strong>Favicon:</strong> Set your website&apos;s favicon
                </li>
                <li>
                  <strong>Fixed Navigation:</strong> Enable/disable sticky
                  header
                </li>
                <li>
                  <strong>Smooth Scrolling:</strong> Configure page scroll
                  behavior
                </li>
                <li>
                  <strong>Back to Top Button:</strong> Customize the
                  scroll-to-top feature
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="layout">
            <AccordionTrigger>Layout Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Website Width:</strong> Set maximum content width
                </li>
                <li>
                  <strong>Sidebar Width:</strong> Adjust sidebar proportions
                </li>
                <li>
                  <strong>Section Height:</strong> Default section spacing
                </li>
                <li>
                  <strong>Header Format:</strong> Configure header layout
                </li>
                <li>
                  <strong>Footer Layout:</strong> Customize footer columns
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="typography">
            <AccordionTrigger>Typography Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Font Selection:</strong> Choose from Google Fonts
                </li>
                <li>
                  <strong>Font Sizes:</strong> Set default text sizes
                </li>
                <li>
                  <strong>Line Height:</strong> Adjust text spacing
                </li>
                <li>
                  <strong>Letter Spacing:</strong> Fine-tune character spacing
                </li>
                <li>
                  <strong>Text Colors:</strong> Define color scheme
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Performance Options</CardTitle>
            <CardDescription>
              Optimize your website&apos;s performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Static CSS:</strong> Generate static stylesheets for
                faster loading
              </li>
              <li>
                <strong>Dynamic CSS:</strong> Control CSS rendering method
              </li>
              <li>
                <strong>Critical CSS:</strong> Optimize above-the-fold content
              </li>
              <li>
                <strong>JavaScript Defer:</strong> Improve page load times
              </li>
              <li>
                <strong>Minification:</strong> Compress CSS and JavaScript files
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integration Settings</CardTitle>
            <CardDescription>
              Configure third-party services and APIs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Google Maps API:</strong> Add your API key for map
                modules
              </li>
              <li>
                <strong>reCAPTCHA:</strong> Configure form security
              </li>
              <li>
                <strong>Social Media:</strong> Add profile links
              </li>
              <li>
                <strong>Analytics:</strong> Add tracking codes
              </li>
              <li>
                <strong>Custom Code:</strong> Insert header/footer scripts
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Continue exploring WordPress features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/wordpress/content">
                  Manage WordPress content
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/wordpress/users">
                  User management
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
